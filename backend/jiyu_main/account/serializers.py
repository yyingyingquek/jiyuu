from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = '__all__'

    def get_name(self, obj):
        name = obj.name
        if name == '':
            name = obj.email

        return name


class RegisterUserSerializer(serializers.ModelSerializer):
    # token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
