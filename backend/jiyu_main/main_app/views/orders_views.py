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
        user = request.user
        data = request.data
        order = data['order']

        if order and len(order) == 0:
            return Response('no items to checkout')
        else:
            order = OrderSerializer(data)


class GetOrderByID(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        user = request.user
        order = Order.objects.get(id=pk)
        if user.is_admin or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
