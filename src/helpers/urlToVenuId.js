import parseDomain from 'parse-domain';

export default url => {
  const { domain, tld } = parseDomain(url);
  return `${domain}.${tld}`.replace(/[.-]/g, '_');
};