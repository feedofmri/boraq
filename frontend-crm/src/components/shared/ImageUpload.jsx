import { useState } from 'react';
import { Upload, X, Image } from 'lucide-react';
import api from '../../api/client';

export default function ImageUpload({ value, onChange, folder = 'uploads', label = 'Image' }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);
      const res = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onChange(res.data.path);
    } catch (err) {
      alert('Upload failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-text-secondary mb-1.5">{label}</label>
      {value ? (
        <div className="relative inline-block">
          <img
            src={`/api/files/${value}`}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg border border-surface-border"
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute -top-2 -right-2 w-6 h-6 bg-danger text-white rounded-full flex items-center justify-center hover:bg-danger-hover"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-surface-border rounded-lg cursor-pointer hover:border-accent hover:bg-accent-bg transition-colors">
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          {uploading ? (
            <div className="animate-spin w-6 h-6 border-2 border-accent border-t-transparent rounded-full" />
          ) : (
            <div className="text-center text-text-muted">
              <Upload className="w-6 h-6 mx-auto mb-1" />
              <span className="text-xs">Upload</span>
            </div>
          )}
        </label>
      )}
      {value && <p className="text-xs text-text-muted mt-1 truncate max-w-xs">{value}</p>}
    </div>
  );
}

