from django.urls import path
from . import views

urlpatterns = [
    path('users/profile/', views.GetUserDetails.as_view(), name='users-profile'),
    path('users/', views.GetUsers.as_view(), name='users'),
    # register
    path('users/register/', views.RegisterUser.as_view(), name='register-user')
]
