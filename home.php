<?php 
  /* Template Name: Custom Home */

  get_header();
?>

<div class="home-banner">
  <h1><?php echo get_bloginfo(); ?> </h1>
  <h3>October 8, 2016</h3>
</div>
<div class="home-segment">
  <div class="home-segment-text">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <h2><?php the_field('title'); ?></h2>

    <p><?php the_field('welcome_blurb'); ?></p>
  </div>
  <div class="home-image">
      <?php 

      $image = get_field('image');
      $sizeXlarge = 'xlarge-img';
      $sizeLarge = 'large-img';
      $sizeMedium = 'medium-img';
      $sizeSmall = 'small-img';
      $sizeXsmall = 'xsmall-img';
      $xlarge = $image['sizes'][$sizeXlarge];
      $large = $image['sizes'][$sizeLarge];
      $medium = $image['sizes'][$sizeMedium];
      $small = $image['sizes'][$sizeSmall];
      $xsmall = $image['sizes'][$sizeXsmall];

     ?>
     <?php if( !empty($image) ): ?>

      <img sizes="80vw" 
      srcset="
          <?php echo $xlarge; ?> 1800w,
          <?php echo $large; ?> 1200w,
          <?php echo $medium; ?> 700w,
          <?php echo $small; ?> 500w,
          <?php echo $xsmall; ?> 300w"

      alt="<?php echo $image['alt']; ?>">
    <?php endif ?>
  </div>
  <div class="home-segment-text">
    <h2><?php the_field('hotel_title'); ?></h2>

    <p><?php the_field('hotel_blurb'); ?> </p>
  </div>
  <?php endwhile; else : ?>
  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
<?php rewind_posts(); ?>
</div>
<div class="home-segment">

  <div class="image-list"><!-- This is on the content.scss-->
    
    <div>
      <img src="<?php echo get_bloginfo('template_directory');?>/images/george_small.jpg">
      <h3>Header</h3>
      <p>You probably haven't heard of them truffaut cliche hoodie kickstarter green juice readymade mlkshk, artisan echo park four loko cornhole. Everyday.</p>
      <a href="#">Link</a>
    </div>
    <div>
      <img src="<?php echo get_bloginfo('template_directory');?>/images/george_small.jpg">
      <h3>Header</h3>
      <p>You probably haven't heard of them truffaut cliche hoodie kickstarter green juice readymade mlkshk, artisan echo park four loko cornhole. Everyday.</p>
      <a href="#">Link</a>
    </div>
    <div>
      <img src="<?php echo get_bloginfo('template_directory');?>/images/george_small.jpg">
      <h3>Header</h3>
      <p>You probably haven't heard of them truffaut cliche hoodie kickstarter green juice readymade mlkshk, artisan echo park four loko cornhole. Everyday.</p>
      <a href="#">Link</a>
    </div>
    
  </div>
</div>