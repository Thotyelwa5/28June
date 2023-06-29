<template>
    
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.postimg.cc/sf6ygFS5/hatssss.jpg" class="d-block w-100" alt="landing">
              <div class="carousel-caption d-none d-md-block">
                <h1>Hatbox Junction</h1>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.postimg.cc/TPW8QCWk/black-hat-750x350.jpg" class="d-block w-100" alt="about">
              <div class="carousel-caption d-none d-md-block">
                <h3>ABOUT HATBOX JUNCTION</h3>
                <h5>At Hatbox Junction, we believe that the right hat or cap is more than just an accessory; it's a
                  statement of individuality and a reflection of personal style. We are dedicated to providing you with an
                  exceptional selection of hats and caps that not only protect you from the elements but also help you
                  express your unique personality.We understand the importance of quality craftsmanship, which is why we
                  source our hats and caps from renowned manufacturers known for their expertise and attention to detail.
                  Each piece in our collection is made with the utmost care, ensuring durability and long-lasting comfort.
                  We invite you to explore our collection and discover the perfect headwear that will complete your
                  outfits with flair. Follow us on social media to stay updated on the latest trends, style tips, and
                  exclusive promotions. Feel free to reach out to us with any questions or feedback - we love hearing from
                  our valued customers
                  Thank you for choosing Hatbox Junction. We look forward to helping you find the perfect hat or cap that
                  will make you stand out from the crowd.</h5>
    
              </div>
            </div>
    
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="container features" id="container">
          <div class="row">
            <div class="col">
              <h2 class="display-2 text-center" id='featured'>Featured Products</h2>
            </div>
          </div>
        </div>
    
          <div class="row">
            <div class="col" id="cardContainer">
    
            </div>
          </div>
          <div class="row">
            <div class="col" id="feature-btn">
              <button class="btn border border-2 m-2" onclick="goToProductsPage()"><a href="./html/Product.html">Go to
                  Products</a></button>
            </div>
          </div>
            <button type="button" class="btn btn-primary float-right w-50 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Contact Us</button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Form</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="https://formspree.io/f/xpzevrlq" method="post">
                <div class="mb-3">
                  <label for="full-name" class="col-form-label">FullName & Surname</label>
                  <input type="text" class="form-control" id="fullname-name" name="fullname"  required>
                </div>
                <div class="mb-3">
                  <label for="email-name" class="col-form-label">Email</label>
                  <input type="email" class="form-control" id="@gmail-name" name="email" required >
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" name="message" id="message-text" placeholder="Write something" required></textarea>
               </div>
               </form>
            </div>
          </div>
        </div>
      </div>
          
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>