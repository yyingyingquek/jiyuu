from rest_framework import serializers
from account.serializers import UserSerializer
from .models import *


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_product_name(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Product name is too short.')

        return value

    def get_review(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Product
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order = serializers.SerializerMethodField(read_only=True)
    address = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_order(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderProductSerializer(items, many=True)
        return serializer.data

    def get_address(self, obj):
        address = AddressSerializer(obj.address, many=False)
        return address

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data
