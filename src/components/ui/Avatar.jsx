import PropTypes from 'prop-types'

export default function Avatar ({ name, color = 'fff', background = 'random', className, image = null }) {
  return (
    <img src={image || `https://ui-avatars.com/api/?name=${name}&background=${background}&color=${color}`} alt={`Avatar of ${name}`} className={`rounded-full ${className}`} />
  )
}

Avatar.propTypes = {
  /** Nama yang akan ditampilkan sebagai avatar text (jika image tidak ada) */
  name: PropTypes.string.isRequired,
  /** Warna teks avatar (hex tanpa # atau nama warna) */
  color: PropTypes.string,
  /** Warna background avatar (hex tanpa #, nama warna, atau 'random') */
  background: PropTypes.string,
  /** Class tambahan untuk styling avatar */
  className: PropTypes.string,
  /** URL gambar jika ingin menggunakan custom image */
  image: PropTypes.string
}
