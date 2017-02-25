<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dojo Laravel</title>
    <!-- configuration dojo -->
    <script>
	    dojoConfig = {
			"async": 1,
			"packages": [
				{
					"location": "/lib/dojo/dijit",
					"name": "dijit"
				}, {
					"location": "/lib/dojo/dojox",
					"name": "dojox"
				}, {
					"location": "/lib/dojo/dojo",
					"name": "dojo"
				}, {
					"location": "/app",
					"name": "app"
				}
			],
			"parseOnLoad": 1,
			"locale": "en-us"
		};
	</script>
	<!-- load CSS dojo -->
	<link rel="stylesheet" href="{{ asset('lib/dojo/dojo/resources/dojo.css') }} " media="screen">
	<link rel="stylesheet" href="{{ asset('lib/dojo/dijit/themes/dijit.css') }} " media="screen">

	<link rel="stylesheet" href="{{ asset('lib/dojo/dijit/themes/soria/soria.css') }} " media="screen">
	<!-- <link rel="stylesheet" href="{{ asset('lib/dojo/dijit/themes/claro/claro.css') }} " media="screen"> -->
	<!-- <link rel="stylesheet" href="{{ asset('lib/dojo/dijit/themes/nihilo/nihilo.css') }} " media="screen"> -->
	<!-- <link rel="stylesheet" href="{{ asset('lib/dojo/dijit/themes/tundra/tundra.css') }} " media="screen"> -->
	<link rel="stylesheet" href="{{ asset('css/custom.css') }} " media="screen">

	<!-- load dojo -->
    <script type="text/javascript" src="{{ asset('lib/dojo/dojo/dojo.js') }}" data-dojo-config="async: true"></script>
    <script type="text/javascript">
    	require(["dojo/dom", "dojo/domReady!", "app/startup/Startup"], function(dom, dojoReady, Startup){
			var main = new Startup();
		});

    </script>
</head>
<body class="soria">
	<div id="rootPanel"></div>
</body>
</html>