---
title: "정규표현식"
layout: archive
permalink: /categories/regex
author_profile: true
--- 

{% assign posts = site.categories.['정규표현식'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}