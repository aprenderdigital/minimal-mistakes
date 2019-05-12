---
title: "Introdução"
permalink: /curso/introducao/
excerpt: "Primeiros passos do curso sobre a personalização de livros."
last_modified_at: 2019-05-10T15:53:52-04:00
redirect_from:
  - /theme-setup/
toc: true
---

## Installing the theme

Teste.

<div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
<script>
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
</script>

If you're running Jekyll v3.5+ and self-hosting you can quickly install the theme as a Ruby gem.

### Gem-based method

With Gem-based themes, directories such as the `assets`, `_layouts`, `_includes`, and `_sass` are stored in the theme’s gem, hidden from your immediate view. This allows for easier installation and updating as you don't have to manage any of the theme files. 

<iframe width="560" height="315" src="https://console.cloud.google.com/cloudshell/editor?shellonly=true" frameborder="0" allowfullscreen></iframe>

[![Open in Cloud Shell](//gstatic.com/cloudssh/images/open-btn.svg)](https://console.cloud.google.com/cloudshell/editor?cloudshell_git_repo=http://path-to-repo/sample.git)