from rest_framework import serializers
# Note : django already has User model as well as means to Authenticate, we are using knox for tokens
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db import models
# User serializer
# a serializer needs to know the model class and the fields being taken from it
# as the incoming data from API will be serialized into these field's datatypes


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # it is recommended to explicitly specify the fields
        fields = ('id', 'username', 'email')


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}  # extra arguments

    # create method for class: create and update are provided by default u can choose to overide anyone of them
    # validates the fields and creates the user
    def create(self, validated_data):
        user = User.objects.create_user(  # create_user is default from djangos User model
            validated_data['username'], validated_data['email'], validated_data['password'])
        return user

# Login serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    # create method for class: create and update are provided by default u can choose to overide anyone of them
    # validates the fields and creates the user
   #  Field-level validation: custom field-level validation by adding .validate_<field_name> methods to your Serializer
   #  Object-level validation is done as below method : validate
    def validate(self, data):
        print('data', data)

        user = authenticate(**data)
        print(user)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect credentials")
