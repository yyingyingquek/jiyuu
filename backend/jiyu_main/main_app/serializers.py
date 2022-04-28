from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_product_name(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Product name is too short.')

        return value

