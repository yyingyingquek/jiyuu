from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_product_name(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Product name is too short.')

        return value

