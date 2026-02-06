---
title: Grants
permalink: /grants/
---

{% for grant in site.grants %}
### {{ grant.title }}

- **Funder:** {{ grant.funder }}
- **Role:** {{ grant.role }}
- **Status:** {{ grant.status }}
- **Period:** {{ grant.start }}–{{ grant.end }}
- **Amount:** {{ grant.amount }}

{% endfor %}

