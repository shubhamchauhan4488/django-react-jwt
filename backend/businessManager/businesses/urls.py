from django.urls import path, include
from rest_framework import routers
from .api import BusinessViewSet, OperatingHoursViewSet

router = routers.DefaultRouter()
router.register(r'api/businesses', BusinessViewSet,
                'businesses')  # 3rd param is just basename
router.register(r'api/operatingHours', OperatingHoursViewSet,
                'operating-hours')

urlpatterns = [
    path('', include(router.urls)),
]
