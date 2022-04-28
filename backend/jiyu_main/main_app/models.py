from django.db import models
from django.contrib.auth.models import User


# Create your models here.


# the actual product
# superusers can add many product
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product_name = models.CharField(max_length=200)
    product_description = models.TextField()
    product_price = models.DecimalField(max_digits=8, decimal_places=2)
    # product_image = models.ImageField()
    product_size = models.CharField(max_length=20)
    date_created = models.DateTimeField(auto_now_add=True)
    rating = models.DecimalField(max_digits=6, decimal_places=2, null=True)
    num_of_reviews = models.IntegerField(null=True, default=0)

    def __str__(self):
        return self.product_name


# product review
# 1 product can have many reviews
class Review(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    rating = models.IntegerField(null=True, blank=True)
    comment = models.TextField(null=True)

    def __str__(self):
        return str(self.rating)


# the order placed
# 1 user can place many orders
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    order_created = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=200)
    price_paid = models.DecimalField(max_digits=8, decimal_places=2)
    shipping = models.DecimalField(max_digits=8, decimal_places=2)
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    payment_status = models.BooleanField(default=False, null=True, blank=True)
    # not adding auto time cause not paid at the start
    payment_date = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    delivery_status = models.BooleanField(default=False, null=True, blank=True)
    delivered_date = models.DateTimeField(auto_now_add=False, null=True, blank=True)

    def __str__(self):
        return str(self.order_created)


# cart items (relationship to connect product and order)
# 1 order can have many products
class Order_Product(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    product_name = models.CharField(max_length=200)
    quantity = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.id)


# 1 order to 1 shipping address
class Address(models.Model):
    id = models.AutoField(primary_key=True)
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True)
    address = models.CharField(max_length=300)
    postal_code = models.CharField(max_length=6)
    shipping_price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.order
