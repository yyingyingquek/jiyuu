from rest_framework.response import Response
from rest_framework.views import APIView
from main_app.models import Product, Order, Order_Product, Address
from main_app.serializers import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status


# Create your views here.
class AddOrder(APIView):
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        # user = request.user
        # data = request.data
        # order_items = data['orderItems']

        # if order_items and len(order_items) == 0:
        #     return Response('no items to checkout', status=status.HTTP_400_BAD_REQUEST)
        # else:
        serializer = OrderSerializer(data=request.data, many=False)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class GetOrderByID(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        user = request.user
        order = Order.objects.get(id=pk)
        # if user.is_admin or order.user == user:
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


class CreateAddress(APIView):
    def post(self, request):
        serializer = AddressSerializer(data=request.data, many=False)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


