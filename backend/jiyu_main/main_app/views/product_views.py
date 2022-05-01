from rest_framework.response import Response
from rest_framework.views import APIView
from main_app.models import Product
from main_app.serializers import ProductSerializer
from rest_framework.permissions import IsAdminUser


# Create your views here.
class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class SingleProductDetail(APIView):
    def get(self, request, pk):
        products = Product.objects.get(id=pk)
        serializer = ProductSerializer(products, many=False)
        return Response(serializer.data)


class CreateProduct(APIView):
    # permission_classes = (IsAdminUser,)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response('error with creating product :(')


class UpdateProduct(APIView):
    permission_classes = (IsAdminUser,)

    def patch(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(instance=product, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


class DeleteProduct(APIView):
    permission_classes = (IsAdminUser,)

    def delete(self, request, pk):
        product = Product.objects.get(id=pk)
        product.delete()
        return Response('deleted product')
