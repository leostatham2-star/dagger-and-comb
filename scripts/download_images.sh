#!/bin/bash
# Download all candidate images to public/images
set -e
DIR=/home/z/my-project/public/images
mkdir -p $DIR

declare -A IMGS=(
  # barber action / hero
  [hero1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc3c3bcc863a.jpeg"
  [hero2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a01d063c995f.jpg"
  [hero3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/098ffe74c2a9.jpg"
  [action1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4dbd7f433b92.jpg"
  [action2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d2e37c129077.jpg"
  [action3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a01d063c995f.jpg"
  [welcome1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/184a4740d28e.jpg"
  [welcome2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4a6906122283.jpg"
  [welcome3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/af67609572c7.jpg"
  # interior
  [interior1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/53fa046932af.jpg"
  [interior2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/74b0b1804adb.jpg"
  [interior3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/116c23b19fde.jpg"
  [interior4.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/49fd6f9793ea.jpg"
  [interior5.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a9a3a3558bae.jpg"
  # tattoo
  [tattoo1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a2ec684f16b8.jpeg"
  [tattoo2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2638a593c276.jpg"
  [tattoo3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dbe9bfd1f588.jpg"
  [tattoo4.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d06b615eb0ae.jpg"
  [tattoo5.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/85b2ea032849.jpg"
  [tattoo6.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/39f90fc0a3c2.jpg"
  [tattoo7.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f99e6015bc27.jpeg"
  # team
  [team1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/16f5c74604e8.jpg"
  [team2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/00def4131add.jpeg"
  [team3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ef533f49c1d2.jpg"
  [team4.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4d57cbb8d9c9.jpg"
  [team5.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/08cd3e558c3f.jpg"
  [team6.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/369b6c2878cc.jpg"
  # portraits (clients, gallery)
  [portrait1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7e5f04de0651.jpg"
  [portrait2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7f8f2b4d6328.jpg"
  [portrait3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/05470954d943.jpeg"
  [portrait4.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5759126c1758.jpg"
  [portrait5.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bbefc6190e9d.jpg"
  [portrait6.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2c9b6085a319.jpg"
  # products
  [product1.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/64e741ce4465.jpg"
  [product2.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d251aabc4be3.webp"
  [product3.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3d907475761f.jpg"
  [product4.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29668a4edef0.jpg"
  [product5.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5df88e146db0.jpg"
  [product6.jpg]="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2a7dc062d0c8.jpg"
)

for name in "${!IMGS[@]}"; do
  curl -s -o "$DIR/$name" "${IMGS[$name]}" --max-time 60 &
done
wait

echo "Downloaded:"
ls -la $DIR | head -50
echo "..."
# Verify all files are valid images (non-trivial size)
for f in $DIR/*; do
  size=$(stat -c%s "$f")
  if [ "$size" -lt 5000 ]; then
    echo "WARNING: $f is only $size bytes"
  fi
done
echo "Total files: $(ls $DIR | wc -l)"
