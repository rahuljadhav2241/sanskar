Add-Type -AssemblyName System.Drawing
$ref = 'C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png'
$b = New-Object 

System.Drawing.Bitmap($ref)

function CropImageClean($name, $x, $y, $w, $h) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $crop = $b.Clone($rect, $b.PixelFormat)
    $outPath = "d:\Sanskar\frontend\public\images\$name.png"
    $crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Output "Saved $outPath ($w x $h)"
}

# In 1024x576:
# Left column content is x=0 to 330.
# Executive scene without bullet text:
# y=318 is where "With clear recommendations." ends.
# From y=320 to 576 (height=256), x=0 to 334.
CropImageClean "diagnostic-executive-scene" 0 320 334 256

$b.Dispose()
