from rest_framework import serializers
from .models import Business, OperatingHours

# Business serializers


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'
        # OR fields = (name,email)


class OperatingHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperatingHours
        fields = '__all__'
