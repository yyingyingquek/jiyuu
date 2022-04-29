from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<str:pk>', views.SingleProductDetail.as_view(), name='single-product'),
    path('create/', views.CreateProduct.as_view(), name='create-product'),
    path('delete/<str:pk>', views.DeleteProduct.as_view(), name='delete-product'),
]
