from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
from rest_framework import routers
from powermitra.settings import dev

from users import views

router = routers.DefaultRouter()
router.register(r'admin', views.UsersViewSet)


urlpatterns = [
	url(r'^', include(router.urls)),
]


if dev.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]