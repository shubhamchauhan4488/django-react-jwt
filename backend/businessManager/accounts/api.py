from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # when we make a request to register, all data will be in request
    def post(self, request, *args, **kwargs):
        # get_serializer will get the serializer class
        serializer = self.get_serializer(data=request.data)
        # When deserializing data, we to call is_valid() before attempting to access the validated data, or save an object instance
        serializer.is_valid(raise_exception=True)
        # raise_exception flag that will cause it to raise a serializers.ValidationError exception if there are validation errors.
        # These are dealt  by the default exception handler that REST framework provides, and will return HTTP 400 Bad Request responses by default.
        # serializer.errors => {'email': ['Enter a valid e-mail address.'], 'username': ['This field is required.', 'username needs to be atleast 6 chars']} i.e list of errors related to each field
        # non_field_errors key may also be present, and will list any general validation errors
        user = serializer.save()
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            # token creation for that particular user
            'token': AuthToken.objects.create(user)[1]
        })

# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })
