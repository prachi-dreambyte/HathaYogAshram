import React, { useState, useEffect } from 'react';

const HomepageBanner = () => {
  // Sample initial banners
  const [banners, setBanners] = useState([
    { id: 1, title: 'Summer Sale', image: 'https://via.placeholder.com/300x100?text=Summer', description: 'Up to 50% off' },
    { id: 2, title: 'New Arrivals', image: 'https://via.placeholder.com/300x100?text=New+Arrivals', description: 'Check out the latest styles' }
  ]);

  // State for new banner form
  const [newBanner, setNewBanner] = useState({
    title: '',
    image: '',
    description: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBanner({ ...newBanner, [name]: value });
  };

  // Add new banner
  const handleCreate = (e) => {
    e.preventDefault();
    if (!newBanner.title || !newBanner.image) return; // simple validation

    const newId = banners.length ? Math.max(...banners.map(b => b.id)) + 1 : 1;
    setBanners([...banners, { id: newId, ...newBanner }]);
    // Reset form
    setNewBanner({ title: '', image: '', description: '' });
  };

  // Delete banner by id
  const handleDelete = (id) => {
  const updated = banners.filter((x) => x.id !== id);
  setBanners(updated);
  localStorage.setItem("homepageBanners", JSON.stringify(updated));
};
  useEffect(() => {
  const saved = localStorage.getItem("homepageBanners");
  if (saved) {
    setBanners(JSON.parse(saved));
  }
}, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Banner Admin Panel</h2>

      {/* Create Banner Form */}
      <div className="card mb-4">
        <div className="card-header">Create New Banner</div>
        <div className="card-body">
          <form onSubmit={handleCreate}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={newBanner.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={newBanner.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="2"
                value={newBanner.description}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Create Banner</button>
          </form>
        </div>
      </div>

      {/* Banners List */}
      <h3>Existing Banners</h3>
      {banners.length === 0 ? (
        <p>No banners yet. Create one above.</p>
      ) : (
        <div className="row">
          {banners.map(banner => (
            <div key={banner.id} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <img src={banner.image} className="card-img-top" alt={banner.title} style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{banner.title}</h5>
                  <p className="card-text">{banner.description}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(banner.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomepageBanner;