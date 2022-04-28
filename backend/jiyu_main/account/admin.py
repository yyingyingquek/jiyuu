from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account


# Register your models here.
class AccountAdmin(UserAdmin):
    list_display = ('email', 'name', 'surname', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    search_fields = ('email', 'name', 'surname')
    readonly_fields = ('id', 'date_joined', 'last_login')
    ordering = ('email',)

    filter_horizontal = ()
    list_filter = ()

    fieldsets = (
        (None, {'fields': ('email', 'surname', 'name', 'date_joined', 'last_login')}),
        ('Permissions', {'fields': ('is_admin', 'is_staff')}),
    )
    # check both passwords are tallied before creating account
    add_fieldsets = (
        (None, {'classes': ('wide',), 'fields': ('email', 'name', 'surname', 'password1', 'password2')}),
    )


admin.site.register(Account, AccountAdmin)
