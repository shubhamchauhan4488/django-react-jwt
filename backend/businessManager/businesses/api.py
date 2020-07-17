from rest_framework import viewsets, permissions
from businesses.models import Business, OperatingHours
from .serializers import BusinessSerializer, OperatingHoursSerializer

# Business viewset :
# Helps to create a basic CRUD api without having to specify explicitly GET POST PUT etc


class BusinessViewSet(viewsets.ModelViewSet):
    # queryset = Business.objects.all()  # query that gets all the businesses

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = BusinessSerializer

    # To return businesses of a particular AUTHENTICATED Business Owner
    def get_queryset(self):
        # return self.request.user.businesses.all()
        return Business.objects.all()

    # When this is called while Business creation (with the serializer) of the user it will help us to save User too along with the new business
    def perform_create(self, serializer):
        # To inject additional data at the point of saving the instance. This additional data might include information like the current user, the current time,etc
        # You can do so by including additional keyword arguments when calling .save()
        serializer.save(owner=self.request.user)


class OperatingHoursViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = OperatingHoursSerializer

    def get_queryset(self):
        print('selfkwargs', self.kwargs['id'])
        queryset = OperatingHours.objects.filter(
            business_id=self.kwargs['id'])
        print('queryset', queryset)
        return queryset
