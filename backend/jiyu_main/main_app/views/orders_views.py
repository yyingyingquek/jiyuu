from rest_framework.response import Response
from rest_framework.views import APIView
from main_app.models import Product, Order, Order_Product
from main_app.serializers import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from account.models import Account
from datetime import datetime


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


class GetAllOrder(APIView):
    # permission_classes = (IsAdmin,)

    def get(self, request):
        order = Order.objects.all()
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)


class GetOrderByID(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, fk):
        order = Order.objects.filter(user=fk)
        # if user.is_admin or order.user == user:
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)


class UpdateOrderToPaid(APIView):
    def put(self, request, pk):
        order = Order.objects.get(id=pk)
        order.payment_status = True
        order.payment_date = datetime.now()
        order.save()
        return Response('paid')


class UpdateOrderToDelivered(APIView):
    def put(self, request, pk):
        order = Order.objects.get(id=pk)
        order.delivery_status = True
        order.delivered_date = datetime.now()
        order.save()
        return Response('delivered')
