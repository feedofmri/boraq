import { useState, useEffect, useCallback } from 'react';
import api from '../api/client';

/**
 * Generic CRUD hook for admin resources.
 * Usage: const { items, item, loading, fetchAll, fetchOne, create, update, remove } = useResource('/team-members');
 */
export default function useResource(endpoint) {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(endpoint);
      setItems(res.data);
      return res.data;
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const fetchOne = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await api.get(`${endpoint}/${id}`);
      setItem(res.data);
      return res.data;
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const create = useCallback(async (data) => {
    const res = await api.post(endpoint, data);
    return res.data;
  }, [endpoint]);

  const update = useCallback(async (id, data) => {
    const res = await api.put(`${endpoint}/${id}`, data);
    return res.data;
  }, [endpoint]);

  const remove = useCallback(async (id) => {
    await api.delete(`${endpoint}/${id}`);
  }, [endpoint]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { items, item, loading, fetchAll, fetchOne, create, update, remove, setItem };
}

