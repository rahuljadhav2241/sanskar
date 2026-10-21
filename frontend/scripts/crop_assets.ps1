Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Image($x, $y, $w, $h, $destPath) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropBmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $g.DrawImage($img, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $cropBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropBmp.Dispose()
    Write-Host "Saved: $destPath ($w x $h)"
}

# 1. Executive Photo
Crop-Image 0 348 332 228 "d:\Sanskar\frontend\public\images\diagnostic-businessman.jpg"

# 2. Card 01 thumbnail: Funnel
Crop-Image 445 43 83 65 "d:\Sanskar\frontend\public\images\card-funnel-leads.jpg"

# 3. Card 02 thumbnail: Magnet
Crop-Image 654 43 97 65 "d:\Sanskar\frontend\public\images\card-magnet-leads.jpg"

# 4. Card 03 thumbnail: Laptop
Crop-Image 864 43 97 65 "d:\Sanskar\frontend\public\images\card-digital-presence.jpg"

# 5. Card 04 thumbnail: Folders
Crop-Image 447 249 81 69 "d:\Sanskar\frontend\public\images\card-manual-operations.jpg"

# 6. Card 05 thumbnail: 3D Cubes
Crop-Image 653 249 98 69 "d:\Sanskar\frontend\public\images\card-disconnected-systems.jpg"

$img.Dispose()
Write-Host "Clean assets extracted successfully!"
