from rest_framework import serializers
from .models import Products


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

    def validate_product_name(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Product name is too short.')

        return value

