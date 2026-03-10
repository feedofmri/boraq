import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea, Select } from '../../components/shared/FormField';
import ImageUpload from '../../components/shared/ImageUpload';
import TagInput from '../../components/shared/TagInput';
import PageHeader from '../../components/shared/PageHeader';

export default function CaseStudyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/case-studies');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    slug: '', number: '', title: '', subtitle: '', category: 'Web & App',
    cover_image_path: '', youtube_url: '', live_url: '', overview: '',
    challenge: '', solution: '', outcome: '', date: '', sort_order: 0,
    tags: [], techStack: [], features: [],
  });

  useEffect(() => {
    if (id) {
      fetchOne(id).then((data) => setForm({
        slug: data.slug || '', number: data.number || '',
        title: data.title || '', subtitle: data.subtitle || '',
        category: data.category || 'Web & App',
        cover_image_path: data.cover_image_path || '',
        youtube_url: data.youtube_url || '', live_url: data.live_url || '',
        overview: data.overview || '', challenge: data.challenge || '',
        solution: data.solution || '', outcome: data.outcome || '',
        date: data.date ? String(data.date).slice(0, 10) : '',
        sort_order: data.sort_order || 0,
        tags: (data.tags || []).map((t) => t.tag || t),
        techStack: (data.tech_stacks || []).map((t) => t.name || t),
        features: (data.features || []).map((f) => f.feature || f),
      }));
    }
  }, [id]);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      if (id) await update(id, form);
      else await create(form);
      navigate('/case-studies');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || err.message));
    } finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Case Study' : 'Add Case Study'} backTo="/case-studies" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Title" value={form.title} onChange={(e) => set('title', e.target.value)} />
          <Input label="Subtitle" value={form.subtitle} onChange={(e) => set('subtitle', e.target.value)} />
          <Input label="Slug" value={form.slug} onChange={(e) => set('slug', e.target.value)} />
          <Input label="Number" type="number" value={form.number} onChange={(e) => set('number', +e.target.value)} />
          <Select label="Category" value={form.category} onChange={(e) => set('category', e.target.value)} options={[
            { value: 'Web & App', label: 'Web & App' },
            { value: 'UI & Branding', label: 'UI & Branding' },
            { value: 'AI & Automation', label: 'AI & Automation' },
            { value: 'Smart Device', label: 'Smart Device' },
            { value: 'Vision & Speech', label: 'Vision & Speech' },
            { value: 'Web3', label: 'Web3' },
          ]} />
          <Input label="Date" type="date" value={form.date} onChange={(e) => set('date', e.target.value)} />
          <Input label="YouTube URL" value={form.youtube_url} onChange={(e) => set('youtube_url', e.target.value)} />
          <Input label="Live URL" value={form.live_url} onChange={(e) => set('live_url', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <ImageUpload label="Cover Image" value={form.cover_image_path} onChange={(v) => set('cover_image_path', v)} folder="portfolio" />
        <Textarea label="Overview" rows={4} value={form.overview} onChange={(e) => set('overview', e.target.value)} />
        <Textarea label="Challenge" rows={3} value={form.challenge} onChange={(e) => set('challenge', e.target.value)} />
        <Textarea label="Solution" rows={3} value={form.solution} onChange={(e) => set('solution', e.target.value)} />
        <Textarea label="Outcome" rows={3} value={form.outcome} onChange={(e) => set('outcome', e.target.value)} />
        <TagInput label="Tags" tags={form.tags} onChange={(v) => set('tags', v)} />
        <TagInput label="Tech Stack" tags={form.techStack} onChange={(v) => set('techStack', v)} />
        <TagInput label="Features" tags={form.features} onChange={(v) => set('features', v)} />
      </div>
    </div>
  );
}

