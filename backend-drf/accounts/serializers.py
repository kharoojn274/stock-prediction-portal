from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style = {'input_type': 'password'}, min_length = 8)
    class Meta:
        model = User
        fields = ['username', 'email', 'password' ]


    def create(self, validated_date):
        # create_user hash the password and simple create function save the password plain text
        # user = User.objects.create_user(**validated_date) for all the fields
        # manually adding the fields
        user = User.objects.create_user(
            validated_date['username'],
            validated_date['email'],
            validated_date['password'],
            )
        return user