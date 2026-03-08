import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Mesh,
  Group,
  BoxGeometry,
  PlaneGeometry,
  Shape,
  ShapeGeometry,
  ExtrudeGeometry,
  SphereGeometry,
  CylinderGeometry,
  Color,
  Vector2,
  PCFSoftShadowMap,
  TextureLoader,
  SRGBColorSpace,
  ACESFilmicToneMapping,
  LinearFilter,
} from 'three'

// Create a ShapeGeometry from a rounded rect with proper 0-1 UV mapping
function createRoundedPlane(width: number, height: number, radius: number) {
  const shape = createRoundedRectShape(width, height, radius)
  const geo = new ShapeGeometry(shape, 12)
  // Remap UVs from shape coordinates (-w/2..w/2, -h/2..h/2) to 0..1
  const uvAttr = geo.attributes.uv
  const posAttr = geo.attributes.position
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i)
    const y = posAttr.getY(i)
    uvAttr.setXY(i, (x + width / 2) / width, (y + height / 2) / height)
  }
  uvAttr.needsUpdate = true
  return geo
}

function createRoundedRectShape(width, height, radius) {
  const shape = new Shape()
  shape.moveTo(-width / 2 + radius, -height / 2)
  shape.lineTo(width / 2 - radius, -height / 2)
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius)
  shape.lineTo(width / 2, height / 2 - radius)
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2)
  shape.lineTo(-width / 2 + radius, height / 2)
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius)
  shape.lineTo(-width / 2, -height / 2 + radius)
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2)
  return shape
}

// ──── iPhone 15 Pro Model ────
function createPhoneModel(imageUrl, requestRender) {
  const phone = new Group()

  // Body — titanium frame
  const bodyShape = createRoundedRectShape(2.4, 4.8, 0.38)
  const bodyGeo = new ExtrudeGeometry(bodyShape, { depth: 0.28, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 6 })
  const bodyMat = new MeshStandardMaterial({
    color: new Color('#a0a0a5'),
    metalness: 0.4,
    roughness: 0.3,
  })
  const body = new Mesh(bodyGeo, bodyMat)
  body.position.z = -0.32
  phone.add(body)

  // Screen glass — front face
  const screenShape = createRoundedRectShape(2.26, 4.66, 0.32)
  const screenGeo = new ExtrudeGeometry(screenShape, { depth: 0.01, bevelEnabled: false })
  const screenMat = new MeshStandardMaterial({
    color: new Color('#0a0a0a'),
    metalness: 0.3,
    roughness: 0.15,
    emissive: new Color('#050510'),
    emissiveIntensity: 0.2,
  })
  const screen = new Mesh(screenGeo, screenMat)
  screen.position.z = 0.005
  phone.add(screen)

  // Screen content area (rounded corners, image or placeholder)
  const contentGeo = createRoundedPlane(2.16, 4.5, 0.26)
  
  let contentMat
  if (imageUrl) {
    const loader = new TextureLoader()
    const texture = loader.load(imageUrl, () => {
      if (requestRender) requestRender()
    })
    texture.colorSpace = SRGBColorSpace
    texture.minFilter = LinearFilter
    texture.generateMipmaps = false
    contentMat = new MeshBasicMaterial({ map: texture })
    contentMat.toneMapped = false
  } else {
    contentMat = new MeshStandardMaterial({
      color: new Color('#e8e8ed'),
      metalness: 0.0,
      roughness: 0.6,
    })
  }

  const content = new Mesh(contentGeo, contentMat)
  content.position.z = 0.018
  phone.add(content)

  // Dynamic Island
  const diShape = createRoundedRectShape(0.72, 0.22, 0.11)
  const diGeo = new ExtrudeGeometry(diShape, { depth: 0.006, bevelEnabled: false })
  const diMat = new MeshBasicMaterial({ color: new Color('#000000') })
  const di = new Mesh(diGeo, diMat)
  di.position.set(0, 2.0, 0.022)
  phone.add(di)

  // Camera lens in Dynamic Island
  const lensGeo = new CylinderGeometry(0.04, 0.04, 0.008, 16)
  const lensMat = new MeshStandardMaterial({ color: new Color('#1a1a2e'), metalness: 0.8, roughness: 0.3, emissive: new Color('#0a0a4a'), emissiveIntensity: 0.3 })
  const lens = new Mesh(lensGeo, lensMat)
  lens.rotation.x = Math.PI / 2
  lens.position.set(-0.15, 2.0, 0.025)
  phone.add(lens)

  // Side buttons — volume
  const btnGeo = new BoxGeometry(0.03, 0.32, 0.08)
  const btnMat = new MeshStandardMaterial({ color: new Color('#7a7a7e'), metalness: 0.95, roughness: 0.15 })
  const volUp = new Mesh(btnGeo, btnMat)
  volUp.position.set(-1.22, 1.2, -0.15)
  phone.add(volUp)
  const volDown = new Mesh(btnGeo.clone(), btnMat)
  volDown.position.set(-1.22, 0.7, -0.15)
  phone.add(volDown)

  // Action button
  const actionGeo = new CylinderGeometry(0.06, 0.06, 0.03, 16)
  const action = new Mesh(actionGeo, btnMat)
  action.rotation.z = Math.PI / 2
  action.position.set(-1.22, 1.7, -0.15)
  phone.add(action)

  // Power button
  const powerGeo = new BoxGeometry(0.03, 0.45, 0.08)
  const power = new Mesh(powerGeo, btnMat)
  power.position.set(1.22, 1.0, -0.15)
  phone.add(power)

  // Home indicator bar
  const barGeo = new BoxGeometry(0.5, 0.025, 0.006)
  const barMat = new MeshBasicMaterial({ color: new Color('#444444') })
  const bar = new Mesh(barGeo, barMat)
  bar.position.set(0, -2.15, 0.022)
  phone.add(bar)

  // Back camera module (visible when rotated)
  const camModShape = createRoundedRectShape(0.95, 0.95, 0.16)
  const camModGeo = new ExtrudeGeometry(camModShape, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 4 })
  const camModMat = new MeshStandardMaterial({ color: new Color('#8a8a8e'), metalness: 0.85, roughness: 0.2 })
  const camMod = new Mesh(camModGeo, camModMat)
  camMod.position.set(-0.55, 1.6, -0.50)
  phone.add(camMod)

  // Camera lenses on back
  const backLensGeo = new CylinderGeometry(0.16, 0.16, 0.04, 24)
  const backLensMat = new MeshStandardMaterial({ color: new Color('#1a1a2e'), metalness: 0.9, roughness: 0.1, emissive: new Color('#060628'), emissiveIntensity: 0.2 })
  const positions = [[-0.75, 1.8, -0.56], [-0.35, 1.8, -0.56], [-0.75, 1.4, -0.56]]
  positions.forEach(([x, y, z]) => {
    const l = new Mesh(backLensGeo.clone(), backLensMat)
    l.rotation.x = Math.PI / 2
    l.position.set(x, y, z)
    phone.add(l)

    // Lens ring
    const ringGeo = new CylinderGeometry(0.18, 0.18, 0.02, 24)
    const ringMat = new MeshStandardMaterial({ color: new Color('#6a6a6e'), metalness: 0.95, roughness: 0.12 })
    const ring = new Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    ring.position.set(x, y, z + 0.01)
    phone.add(ring)
  })

  return phone
}

// ──── MacBook Pro Model ────
function createLaptopModel(imageUrl, requestRender) {
  const laptop = new Group()

  // Screen panel
  const screenGroup = new Group()

  // Screen outer shell (aluminum)
  const lidShape = createRoundedRectShape(5.6, 3.8, 0.15)
  const lidGeo = new ExtrudeGeometry(lidShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 4 })
  const aluminumMat = new MeshStandardMaterial({
    color: new Color('#d0d0d5'),
    metalness: 0.3,
    roughness: 0.4,
  })
  const lid = new Mesh(lidGeo, aluminumMat)
  lid.position.z = -0.20
  screenGroup.add(lid)

  // Screen bezel area (black)
  const bezelShape = createRoundedRectShape(5.4, 3.6, 0.1)
  const bezelGeo = new ExtrudeGeometry(bezelShape, { depth: 0.01, bevelEnabled: false })
  const bezelMat = new MeshStandardMaterial({
    color: new Color('#0d0d0d'),
    metalness: 0.2,
    roughness: 0.3,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  })
  const bezel = new Mesh(bezelGeo, bezelMat)
  bezel.position.z = -0.005
  screenGroup.add(bezel)

  // Screen content (rounded corners, image or placeholder)
  const displayGeo = createRoundedPlane(5.2, 3.36, 0.06)
  
  let displayMat
  if (imageUrl) {
    const loader = new TextureLoader()
    const texture = loader.load(imageUrl, () => {
      if (requestRender) requestRender()
    })
    texture.colorSpace = SRGBColorSpace
    texture.minFilter = LinearFilter
    texture.generateMipmaps = false
    displayMat = new MeshBasicMaterial({ map: texture })
    displayMat.toneMapped = false
  } else {
    displayMat = new MeshStandardMaterial({
      color: new Color('#e8e8ed'),
      metalness: 0.0,
      roughness: 0.5,
    })
  }

  const display = new Mesh(displayGeo, displayMat)
  display.position.set(0, -0.06, 0.02)
  screenGroup.add(display)

  // Camera notch
  const notchShape = createRoundedRectShape(0.6, 0.12, 0.06)
  const notchGeo = new ExtrudeGeometry(notchShape, { depth: 0.008, bevelEnabled: false })
  const notchMat = new MeshBasicMaterial({ color: new Color('#0d0d0d') })
  const notch = new Mesh(notchGeo, notchMat)
  notch.position.set(0, 1.74, 0.015)
  screenGroup.add(notch)

  // Camera dot
  const camDotGeo = new SphereGeometry(0.02, 16, 16)
  const camDotMat = new MeshStandardMaterial({ color: new Color('#1a1a3e'), metalness: 0.5, roughness: 0.3 })
  const camDot = new Mesh(camDotGeo, camDotMat)
  camDot.position.set(0, 1.74, 0.025)
  screenGroup.add(camDot)

  // Apple logo on back of lid
  const logoGeo = new CylinderGeometry(0.2, 0.2, 0.005, 24)
  const logoMat = new MeshStandardMaterial({ color: new Color('#b0b0b4'), metalness: 0.95, roughness: 0.1 })
  const logo = new Mesh(logoGeo, logoMat)
  logo.rotation.x = Math.PI / 2
  logo.position.set(0, 0, -0.30)
  screenGroup.add(logo)

  // Position screen angled open
  screenGroup.position.y = 1.0
  screenGroup.rotation.x = -0.15 // slightly tilted back
  laptop.add(screenGroup)

  // Base / keyboard area
  const baseGroup = new Group()

  const baseShape = createRoundedRectShape(5.6, 3.6, 0.15)
  const baseGeo = new ExtrudeGeometry(baseShape, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 3 })
  const base = new Mesh(baseGeo, aluminumMat)
  base.rotation.x = -Math.PI / 2
  base.position.set(0, 0, 0)
  baseGroup.add(base)

  // Keyboard area (dark inset)
  const kbShape = createRoundedRectShape(4.8, 2.2, 0.08)
  const kbGeo = new ExtrudeGeometry(kbShape, { depth: 0.005, bevelEnabled: false })
  const kbMat = new MeshStandardMaterial({
    color: new Color('#1a1a1e'),
    metalness: 0.3,
    roughness: 0.6,
  })
  const kb = new Mesh(kbGeo, kbMat)
  kb.rotation.x = -Math.PI / 2
  kb.position.set(0, 0.085, 0.3)
  baseGroup.add(kb)

  // Individual key rows (visual detail)
  const keyMat = new MeshStandardMaterial({ color: new Color('#2a2a2e'), metalness: 0.4, roughness: 0.5 })
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 14; col++) {
      const keyGeo = new BoxGeometry(0.28, 0.003, 0.28)
      const key = new Mesh(keyGeo, keyMat)
      key.position.set(-1.95 + col * 0.32, 0.088, -0.6 + row * 0.36)
      baseGroup.add(key)
    }
  }

  // Trackpad
  const tpShape = createRoundedRectShape(1.8, 1.2, 0.08)
  const tpGeo = new ExtrudeGeometry(tpShape, { depth: 0.003, bevelEnabled: false })
  const tpMat = new MeshStandardMaterial({
    color: new Color('#b8b8bc'),
    metalness: 0.7,
    roughness: 0.25,
  })
  const tp = new Mesh(tpGeo, tpMat)
  tp.rotation.x = -Math.PI / 2
  tp.position.set(0, 0.086, 2.1)
  baseGroup.add(tp)

  // Speaker grilles (left and right)
  for (const side of [-1, 1]) {
    for (let i = 0; i < 20; i++) {
      const grillGeo = new BoxGeometry(0.02, 0.002, 0.04)
      const grillMat = new MeshBasicMaterial({ color: new Color('#555555') })
      const grill = new Mesh(grillGeo, grillMat)
      grill.position.set(side * 2.65, 0.086, -0.5 + i * 0.1)
      baseGroup.add(grill)
    }
  }

  baseGroup.position.y = -0.9
  laptop.add(baseGroup)

  return laptop
}

// ──── Scene Setup ────
export function useDeviceScene(canvasRef, deviceType = 'phone', imageUrl = null) {
  let scene, camera, renderer, device
  let animationId = null
  let isInitialized = false

  function init(canvas) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    // Scene
    scene = new Scene()
    scene.background = null // transparent

    // Camera
    camera = new PerspectiveCamera(35, width / height, 0.1, 100)
    camera.position.set(0, 0, deviceType === 'phone' ? 10 : 14)

    // Renderer
    renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0

    // Lights
    const ambientLight = new AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const mainLight = new DirectionalLight(0xffffff, 1.2)
    mainLight.position.set(5, 8, 10)
    mainLight.castShadow = true
    scene.add(mainLight)

    const fillLight = new DirectionalLight(0xb0c4de, 0.5)
    fillLight.position.set(-5, 3, 5)
    scene.add(fillLight)

    const rimLight = new DirectionalLight(0xffffff, 0.4)
    rimLight.position.set(0, -2, -8)
    scene.add(rimLight)

    // Create device
    if (deviceType === 'phone') {
      device = createPhoneModel(imageUrl, render)
    } else {
      device = createLaptopModel(imageUrl, render)
    }

    scene.add(device)
    isInitialized = true

    render()
  }

  function render() {
    if (!isInitialized) return
    renderer.render(scene, camera)
  }

  function setRotation(rx, ry, rz = 0) {
    if (!device) return
    device.rotation.x = rx
    device.rotation.y = ry
    device.rotation.z = rz
    render()
  }

  function setPosition(x, y, z) {
    if (!device) return
    device.position.set(x, y, z)
    render()
  }

  function resize() {
    if (!renderer || !camera) return
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    render()
  }

  function dispose() {
    if (animationId) cancelAnimationFrame(animationId)
    if (renderer) renderer.dispose()
    isInitialized = false
  }

  function startAutoRotate(speed = 0.003) {
    function animate() {
      if (!device) return
      device.rotation.y += speed
      render()
      animationId = requestAnimationFrame(animate)
    }
    animate()
  }

  function stopAutoRotate() {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  }

  return {
    init,
    render,
    setRotation,
    setPosition,
    resize,
    dispose,
    startAutoRotate,
    stopAutoRotate,
  }
}
