from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Products
from .serializers import ProductSerializer


# Create your views here.
class ProductList(APIView):
    def get(self, request):
        products = Products.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class SingleProductDetail(APIView):
    def get(self, request, pk):
        products = Products.objects.get(id=pk)
        serializer = ProductSerializer(products, many=False)
        return Response(serializer.data)
