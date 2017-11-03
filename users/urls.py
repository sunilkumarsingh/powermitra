from django.conf.urls import url, include
from rest_framework import routers

from users import views
from powermitra.settings import dev

router = routers.DefaultRouter()

user_urls = [
    url(r'^$', views.UserList.as_view(), name='user-list'),
]

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^users/$', views.UserList.as_view(), name="user_list"),
    url(r'^dashboard/$', views.Dashboard.as_view(), name='dashboard')
    # url(r'^$', views.Dashboard.as_view(), name='dashboard')
]


if dev.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]