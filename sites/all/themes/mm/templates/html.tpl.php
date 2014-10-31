<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic|Raleway:900,800,200,300' rel='stylesheet' type='text/css'>
<!--[if lt IE 9]><script src="<?php print base_path() . drupal_get_path('theme', 'mm') . '/js/html5.js'; ?>"></script><![endif]-->
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>