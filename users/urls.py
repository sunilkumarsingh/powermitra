from django.conf.urls import url, include
# from rest_framework import routers

from users import views
from powermitra.settings import dev

# router = routers.DefaultRouter()

user_urls = [
    url(r'^$', views.UserList.as_view(), name='user-list'),
    url(r'^(?P<id>[0-9]+)/$', views.UserDetail.as_view(), name='user-detail'),

]

user_type_urls = [
    url(r'^$', views.UserTypeList.as_view(), name="user-type-list"),
]

urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'^users/', include(user_urls)),
    url(r'^usertype/', include(user_type_urls)),
    url(r'^dashboard/$', views.Dashboard.as_view(), name='dashboard')
]


if dev.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]