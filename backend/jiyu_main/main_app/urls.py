from django.urls import path
from main_app.views import product_views as views
from main_app.views import orders_views as order_views

urlpatterns = [
    # products
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<str:pk>', views.SingleProductDetail.as_view(), name='single-product'),
    path('create/', views.CreateProduct.as_view(), name='create-product'),
    path('update/<str:pk>', views.UpdateProduct.as_view(), name='create-product'),
    path('delete/<str:pk>', views.DeleteProduct.as_view(), name='delete-product'),
    # orders

]
