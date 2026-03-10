import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea, Select } from '../../components/shared/FormField';
import TagInput from '../../components/shared/TagInput';
import ContentBlockEditor from '../../components/shared/ContentBlockEditor';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

export default function BlogPostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/blog-posts');
  const [saving, setSaving] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [form, setForm] = useState({
    slug: '', title: '', excerpt: '', category: 'Web & App', read_time: '',
    date: '', image_url: '', author_team_member_id: '', sort_order: 0,
    tags: [], content: [],
  });

  useEffect(() => {
    api.get('/team-members').then((res) => setTeamMembers(res.data));
    if (id) {
      fetchOne(id).then((data) => setForm({
        slug: data.slug || '', title: data.title || '', excerpt: data.excerpt || '',
        category: data.category || '', read_time: data.read_time || '',
        date: data.date || '', image_url: data.image_url || '',
        author_team_member_id: data.author_team_member_id || '',
        sort_order: data.sort_order || 0,
        tags: (data.tags || []).map((t) => t.tag || t),
        content: (data.content_blocks || []).map((b) => ({ type: b.type, content: b.content })),
      }));
    }
  }, [id]);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      if (id) await update(id, form);
      else await create(form);
      navigate('/blog-posts');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || err.message));
    } finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Blog Post' : 'Add Blog Post'} backTo="/blog-posts" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-4xl">
        <Input label="Title" value={form.title} onChange={(e) => set('title', e.target.value)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Slug" value={form.slug} onChange={(e) => set('slug', e.target.value)} />
          <Select label="Category" value={form.category} onChange={(e) => set('category', e.target.value)} options={[
            { value: 'Web & App', label: 'Web & App' },
            { value: 'UI & Branding', label: 'UI & Branding' },
            { value: 'AI & Automation', label: 'AI & Automation' },
            { value: 'Smart Device', label: 'Smart Device' },
            { value: 'Vision & Speech', label: 'Vision & Speech' },
            { value: 'Web3', label: 'Web3' },
          ]} />
          <Input label="Date" value={form.date} onChange={(e) => set('date', e.target.value)} placeholder="e.g. Jan 15, 2025" />
          <Input label="Read Time" value={form.read_time} onChange={(e) => set('read_time', e.target.value)} placeholder="e.g. 8 min read" />
          <Input label="Image URL" value={form.image_url} onChange={(e) => set('image_url', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <Textarea label="Excerpt" rows={3} value={form.excerpt} onChange={(e) => set('excerpt', e.target.value)} />
        <Select
          label="Author"
          value={form.author_team_member_id}
          onChange={(e) => set('author_team_member_id', e.target.value || null)}
          options={teamMembers.map((m) => ({ value: m.id, label: m.name }))}
        />
        <TagInput label="Tags" tags={form.tags} onChange={(v) => set('tags', v)} />
        <ContentBlockEditor blocks={form.content} onChange={(v) => set('content', v)} />
      </div>
    </div>
  );
}

