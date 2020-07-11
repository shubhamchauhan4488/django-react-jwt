from rest_framework import routers
from .api import BusinessViewSet

router = routers.DefaultRouter()
router.register('api/businesses', BusinessViewSet, 'businesses') # 3rd param is just basename

urlpatterns = router.urls
