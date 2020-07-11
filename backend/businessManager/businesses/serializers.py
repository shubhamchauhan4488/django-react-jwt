from rest_framework import serializers
from .models import Business

# Business serializers


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'
        # OR fields = (name,email)
