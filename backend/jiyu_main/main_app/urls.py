from django.urls import path
from main_app.views import product_views as views
from main_app.views import orders_views as order_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # products
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<str:pk>', views.SingleProductDetail.as_view(), name='single-product'),
    path('create/', views.CreateProduct.as_view(), name='create-product'),
    path('update/<str:pk>', views.UpdateProduct.as_view(), name='create-product'),
    path('delete/<str:pk>', views.DeleteProduct.as_view(), name='delete-product'),
    # review (not working)
    # path('review/<str:pk>', views.CreateReview.as_view(), name='create-review'),
    # orders
    path('add-order/', order_views.AddOrder.as_view(), name='add-order'),
    path('view-order/', order_views.GetAllOrder.as_view(), name='view-order'),
    path('view-order/<str:fk>/', order_views.GetOrderByID.as_view(), name='own-order'),
    path('payment/<str:pk>/', order_views.UpdateOrderToPaid.as_view(), name='payment-order'),
    path('delivered/<str:pk>/', order_views.UpdateOrderToDelivered.as_view(), name='deliver-order'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
