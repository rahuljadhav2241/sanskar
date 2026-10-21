Add-Type -AssemblyName System.Drawing

$ref = 'C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png'
$b = New-Object System.Drawing.Bitmap($ref)

# Crop the raw scene from the left of the reference (x=0 to 350, y=100 to 576)
# Height = 476, Width = 350
$rect = New-Object System.Drawing.Rectangle(0, 100, 350, 476)
$src = $b.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$b.Dispose()

# Create a full section background canvas (1920 x 800)
$canvasW = 1920
$canvasH = 800
$dest = New-Object System.Drawing.Bitmap($canvasW, $canvasH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Fill entire background with #F8FAFC
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#F8FAFC'))
$g.FillRectangle($bgBrush, 0, 0, $canvasW, $canvasH)
$bgBrush.Dispose()

# Draw the office scene on the left, anchored to the bottom-left:
# Scale it up to match the 800px height: height = 750px, width = 550px
$artH = 750
$artW = [int]($src.Width * ($artH / $src.Height)) # ~551px
$artY = $canvasH - $artH
$g.DrawImage($src, 0, $artY, $artW, $artH)

$g.Dispose()
$src.Dispose()

# Now apply smooth alpha blend to the right and top edges of the artwork
# so that the corner part (executive, laptop, desk) is FULLY VISIBLE,
# and the rest fades softly into the #F8FAFC canvas!
$fadeStartRight = $artW - 120 # start fading 120px before the right edge of artwork
$fadeStartTop = $artY + 140   # start fading 140px from the top of artwork

$bgColor = [System.Drawing.ColorTranslator]::FromHtml('#F8FAFC')

for ($y = $artY; $y -lt $canvasH; $y++) {
    for ($x = 0; $x -lt $artW; $x++) {
        $alphaRight = 1.0
        if ($x -gt $fadeStartRight) {
            $t = ($x - $fadeStartRight) / 120.0
            $alphaRight = [Math]::Max(0.0, 1.0 - [Math]::Pow($t, 1.4))
        }
        
        $alphaTop = 1.0
        if ($y -lt $fadeStartTop) {
            $t = ($fadeStartTop - $y) / 140.0
            $alphaTop = [Math]::Max(0.0, 1.0 - [Math]::Pow($t, 1.4))
        }
        
        $blend = [Math]::Min($alphaRight, $alphaTop)
        if ($blend -lt 1.0) {
            $currentPixel = $dest.GetPixel($x, $y)
            $r = [int]($currentPixel.R * $blend + $bgColor.R * (1.0 - $blend))
            $gCol = [int]($currentPixel.G * $blend + $bgColor.G * (1.0 - $blend))
            $bCol = [int]($currentPixel.B * $blend + $bgColor.B * (1.0 - $blend))
            $dest.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gCol, $bCol))
        }
    }
}

$dest.Save("d:\Sanskar\frontend\public\images\section-growth-bg-full.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Dispose()

Write-Output "Created section-growth-bg-full.png (1920x800)"
