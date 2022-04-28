from django.db import models


# Create your models here.


class Products(models.Model):
    product_name = models.CharField(max_length=200)
    product_description = models.TextField()
    product_price = models.DecimalField(max_digits=8, decimal_places=2)
    # product_image = models.ImageField()
    product_size = models.CharField(max_length=20)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name
