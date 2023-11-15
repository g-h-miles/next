export function generateSlug(title: string) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return slug.replace(/[^a-z0-9-]/g, '');
}
