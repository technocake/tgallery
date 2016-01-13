<?php
	#$_FOLDER = getcwd();
	$_FOLDER  	= "content/";
	$_NAME 		= end( explode( '/', $_FOLDER) );
	$filter 	= array($_SERVER['PHP_SELF'], "");


 function ls ($directory, $filter) 
  {
    // create an array to hold directory list
    $results = array();

    // create a handler for the directory
    $handler = opendir($directory);

    // open directory and walk through the filenames
    while ($file = readdir($handler)) {

      // if file isn't this directory or its parent, add it to the results
      if ($file != "." && $file != ".." && !in_array($file, $filter) && is_file($directory.$file)) {
        $results[] = $file;
      }

    }

    // tidy up: close the handler
    closedir($handler);

    // done!
    return $results;

  }


  //Getting a list of all pictures in the current folder :)
  $pictures = ls($_FOLDER, $filter);

?><!Doctype HTML>

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Photos :: <?=$_NAME?></title>
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	
	<script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/tgallery.js"></script>
    <script type="text/javascript">
    	<?php foreach ($pictures as $picture): ?>
    		pictures.pictures.push('<?=$_FOLDER . "/" . $picture?>');
    	<?php endforeach; ?>
    </script>
</head>

<body>

	<header>
		<h1>	<?php echo $_NAME; ?> </h1>
	</header>
	
	<section id="picturestream">
		<?php $i=0; foreach ($pictures as $picture ): ?>
		<article class="photo">
			<img onclick="show_superdisplay(<?=$i++?>);" src="<?=$_FOLDER . "/" . $picture?>" width="250" />
			<label> <?=substr($picture, 0, 20)?></label>
		</article>
		<?php endforeach; ?>
	</section>

	<section id="superdisplay">
	<div id="wrap">
		<img src="<?=$_FOLDER . "/" . $pictures[0]?>">
	</div>
	<section>

	<footer>
		<p >Made by technocake</p>
	</footer>


		

</body>

</html>
