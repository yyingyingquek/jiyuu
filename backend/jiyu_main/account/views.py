# from rest_framework import request

from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status


# Create your views here.
# as long as you are authenticated, you can get in to view own profile
class GetUserDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # getting data from the token
        # user.objects.get
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)


# only superuser can see all users
class GetUsers(APIView):
    permission_classes = ([IsAuthenticated, IsAdminUser])

    def get(self, request):
        # getting data from the token
        # user.objects.get
        users = Account.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class RegisterUser(APIView):
    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response('error with creating user :(')
        #     if user:
        #         json = serializer.data
        #         return Response(json, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
