#!/bin/bash
set -e
cd /home/z/my-project/public/images

# Rename keepers to semantic names (git mv style)
declare -A REN=(
  [hero1.jpg]="cut-dark.jpg"
  [hero2.jpg]="shop-sign.jpg"
  [tattoo2.jpg]="tattoo-artist.jpg"
  [welcome1.jpg]="work-trim.jpg"
  [interior3.jpg]="shop-corner.jpg"
  [portrait2.jpg]="artist-sunny.jpg"
  [s4.jpg]="tools-flatlay.jpg"
  [s5.jpg]="beard-trim.jpg"
  [s3.jpg]="shave-foam.jpg"
  [n5.jpg]="shave-bw.jpg"
  [n9.jpg]="fresh-profile.jpg"
  [n3.jpg]="barber-joey.jpg"
  [team2.jpg]="barber-ray.jpg"
  [team5.jpg]="barber-marcus.jpg"
  [portrait1.jpg]="artist-diego.jpg"
  [tattoo6.jpg]="tattoo-nadia.jpg"
  [tattoo1.jpg]="work-face.jpg"
  [tattoo3.jpg]="work-back.jpg"
  [tattoo4.jpg]="work-arm.jpg"
  [tattoo5.jpg]="work-butterfly.jpg"
  [tattoo7.jpg]="studio-wide.jpg"
  [h1.jpg]="machine.jpg"
  [portrait3.jpg]="client-neck.jpg"
  [portrait4.jpg]="client-floral.jpg"
  [portrait5.jpg]="client-torso.jpg"
  [interior1.jpg]="shop-chairs.jpg"
  [product1.jpg]="shop-products.jpg"
  [product2.jpg]="product-kit.jpg"
  [product3.jpg]="product-pomade.jpg"
  [product6.jpg]="product-oil.jpg"
  [product4.jpg]="shop-counter.jpg"
  [welcome3.jpg]="product-box.jpg"
)
for src in "${!REN[@]}"; do
  if [ -f "$src" ]; then mv "$src" "${REN[$src]}"; fi
done

# Delete watermarked / unused
for f in hero3.jpg welcome2.jpg action1.jpg action2.jpg action3.jpg interior2.jpg interior4.jpg interior5.jpg n1.jpg n2.jpg n4.jpg n6.jpg n7.jpg n8.jpg n10.jpg s1.jpg s2.jpg h2.jpg h3.jpg h4.jpg team1.jpg team3.jpg team4.jpg team6.jpg portrait6.jpg product5.jpg test_img.jpg test_img2.jpg; do
  [ -f "$f" ] && rm -f "$f"
done

echo "Final image set:"
ls | sort
echo "Total: $(ls | wc -l)"
