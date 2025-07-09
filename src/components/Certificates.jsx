import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar, Filter, X, Search, Tag } from 'lucide-react';

const Certificates = () => {
  const scrollContainerRef = useRef(null);
  const [selectedSkillFilters, setSelectedSkillFilters] = useState([]);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('all');
  const [selectedIssuerFilter, setSelectedIssuerFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [showLevelFilter, setShowLevelFilter] = useState(false);
  const [showIssuerFilter, setShowIssuerFilter] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'VPC', 'CloudFormation'],
      verifyUrl: '#',
      description: 'Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.',
      level: 'Professional'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Google Cloud', 'Kubernetes', 'Docker', 'CI/CD', 'Cloud Functions', 'BigQuery'],
      verifyUrl: '#',
      description: 'Professional-level certification for developing scalable and highly available applications on Google Cloud.',
      level: 'Professional'
    },
    {
      id: 3,
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-003',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing', 'NoSQL', 'Performance Tuning'],
      verifyUrl: '#',
      description: 'Comprehensive certification covering MongoDB development, data modeling, and performance optimization.',
      level: 'Associate'
    },
    {
      id: 4,
      title: 'Meta React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-REACT-2022-004',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX', 'Redux', 'Testing'],
      verifyUrl: '#',
      description: 'Professional certificate program covering advanced React development and modern frontend practices.',
      level: 'Professional'
    },
    {
      id: 5,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-005',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Docker', 'Helm', 'Monitoring'],
      verifyUrl: '#',
      description: 'Hands-on certification demonstrating skills in Kubernetes administration and cluster management.',
      level: 'Professional'
    },
    {
      id: 6,
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'AZ-900-2022-006',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Azure', 'Cloud Computing', 'Virtual Machines', 'Storage', 'Networking'],
      verifyUrl: '#',
      description: 'Foundational certification covering core Azure services and cloud computing concepts.',
      level: 'Fundamentals'
    },
    {
      id: 7,
      title: 'Scrum Master Certified (SMC)',
      issuer: 'Scrum Alliance',
      date: '2021',
      credentialId: 'SMC-2021-007',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Scrum', 'Agile', 'Project Management', 'Team Leadership', 'Sprint Planning'],
      verifyUrl: '#',
      description: 'Certification in Scrum methodology and agile project management practices.',
      level: 'Professional'
    },
    {
      id: 8,
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2022',
      credentialId: 'JSNAD-2022-008',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Node.js', 'JavaScript', 'Backend Development', 'Express.js', 'API Development'],
      verifyUrl: '#',
      description: 'Professional certification for Node.js application development and server-side JavaScript.',
      level: 'Professional'
    }
  ];

  // Get all unique skills
  const allSkills = [...new Set(certificates.flatMap(cert => cert.skills))].sort();
  const allLevels = [...new Set(certificates.map(cert => cert.level))].sort();
  const allIssuers = [...new Set(certificates.map(cert => cert.issuer))].sort();

  // Filter certificates based on multiple criteria
  const filteredCertificates = certificates.filter(cert => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    // Skills filter (multiple selection)
    const matchesSkills = selectedSkillFilters.length === 0 || 
      selectedSkillFilters.every(skill => cert.skills.includes(skill));

    // Level filter
    const matchesLevel = selectedLevelFilter === 'all' || cert.level === selectedLevelFilter;

    // Issuer filter
    const matchesIssuer = selectedIssuerFilter === 'all' || cert.issuer === selectedIssuerFilter;

    return matchesSearch && matchesSkills && matchesLevel && matchesIssuer;
  });

  const handleSkillToggle = (skill) => {
    setSelectedSkillFilters(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearAllFilters = () => {
    setSelectedSkillFilters([]);
    setSelectedLevelFilter('all');
    setSelectedIssuerFilter('all');
    setSearchQuery('');
    setShowSkillsFilter(false);
    setShowLevelFilter(false);
    setShowIssuerFilter(false);
  };

  const hasActiveFilters = selectedSkillFilters.length > 0 || 
    selectedLevelFilter !== 'all' || 
    selectedIssuerFilter !== 'all' || 
    searchQuery !== '';

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
      case 'Associate':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Fundamentals':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollSpeed = 1; // pixels per frame
    const scrollInterval = 50; // milliseconds

    const autoScroll = () => {
      if (!scrollContainer) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;

      // Check if we've reached the end or beginning
      if (scrollDirection === 1 && scrollLeft >= maxScroll - 10) {
        setScrollDirection(-1); // Change direction to left
      } else if (scrollDirection === -1 && scrollLeft <= 10) {
        setScrollDirection(1); // Change direction to right
      }

      // Scroll in the current direction
      scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
    };

    const intervalId = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, [isAutoScrolling, scrollDirection, filteredCertificates]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  // Reset auto-scroll when filters change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
      setScrollDirection(1);
      setIsAutoScrolling(true);
    }
  }, [filteredCertificates]);

  return (
    <section id="certificates" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Certificates & Credentials
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications and credentials that validate my expertise across various technologies and methodologies.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 lg:mb-12">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search certificates, skills, or issuers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Skills Filter */}
              <button
                onClick={() => setShowSkillsFilter(!showSkillsFilter)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedSkillFilters.length > 0 
                    ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <Tag size={16} />
                <span className="font-medium">
                  Skills {selectedSkillFilters.length > 0 && `(${selectedSkillFilters.length})`}
                </span>
              </button>
              
              {/* Level Filter */}
              <button
                onClick={() => setShowLevelFilter(!showLevelFilter)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedLevelFilter !== 'all' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <Award size={16} />
                <span className="font-medium">Level</span>
              </button>

              {/* Issuer Filter */}
              <button
                onClick={() => setShowIssuerFilter(!showIssuerFilter)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedIssuerFilter !== 'all' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <Filter size={16} />
                <span className="font-medium">Issuer</span>
              </button>
              
              {/* Clear All Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors duration-300"
                >
                  <X size={14} />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredCertificates.length} of {certificates.length} certificates
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Active filters:</span>
                
                {searchQuery && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Search: "{searchQuery}"
                  </span>
                )}
                
                {selectedSkillFilters.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full flex items-center space-x-1">
                    <span>{skill}</span>
                    <button onClick={() => handleSkillToggle(skill)}>
                      <X size={12} />
                    </button>
                  </span>
                ))}
                
                {selectedLevelFilter !== 'all' && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full flex items-center space-x-1">
                    <span>Level: {selectedLevelFilter}</span>
                    <button onClick={() => setSelectedLevelFilter('all')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                
                {selectedIssuerFilter !== 'all' && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full flex items-center space-x-1">
                    <span>Issuer: {selectedIssuerFilter}</span>
                    <button onClick={() => setSelectedIssuerFilter('all')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Filter Dropdowns */}
          {showSkillsFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Select Skills (multiple selection):</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-hide">
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedSkillFilters.includes(skill)
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showLevelFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Filter by Level:</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSelectedLevelFilter('all');
                    setShowLevelFilter(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedLevelFilter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  All Levels
                </button>
                {allLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setSelectedLevelFilter(level);
                      setShowLevelFilter(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedLevelFilter === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showIssuerFilter && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
              <h4 className="font-semibold text-slate-900 mb-3">Filter by Issuer:</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-hide">
                <button
                  onClick={() => {
                    setSelectedIssuerFilter('all');
                    setShowIssuerFilter(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedIssuerFilter === 'all'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  All Issuers
                </button>
                {allIssuers.map((issuer) => (
                  <button
                    key={issuer}
                    onClick={() => {
                      setSelectedIssuerFilter(issuer);
                      setShowIssuerFilter(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedIssuerFilter === issuer
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {issuer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Certificates Grid */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex space-x-6 w-max">
            {filteredCertificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className="card overflow-hidden animate-slide-up flex-shrink-0 w-80 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 text-xs rounded-full border font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 mb-1 text-sm leading-tight line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-600 font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <a
                      href={cert.verifyUrl}
                      className="ml-2 p-1.5 text-slate-400 hover:text-cyan-600 transition-colors duration-300 flex-shrink-0"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-slate-600 text-xs mb-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-slate-500">
                        <Calendar size={12} />
                        <span className="text-xs">Issued: {cert.date}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-400 truncate">
                      ID: {cert.credentialId}
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-1 text-xs rounded-full font-medium transition-colors duration-300 cursor-pointer ${
                              selectedSkillFilters.includes(skill)
                                ? 'bg-cyan-600 text-white'
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                            onClick={() => handleSkillToggle(skill)}
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-scroll Controls */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-4 bg-slate-100 rounded-lg p-2">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoScrolling
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {isAutoScrolling ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
            </button>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
              <span>{isAutoScrolling ? 'Auto-scrolling' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-slate-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No certificates found
            </h3>
            <p className="text-slate-600 mb-4">
              No certificates match the selected skill filter.
            </p>
            <button
              onClick={clearAllFilters}
              className="btn-primary"
            >
              Show All Certificates
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 lg:p-8 border border-cyan-200">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600 mb-1">
                {certificates.length}
              </div>
              <div className="text-sm text-slate-600">Total Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {certificates.filter(cert => cert.level === 'Professional').length}
              </div>
              <div className="text-sm text-slate-600">Professional Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {allSkills.length}
              </div>
              <div className="text-sm text-slate-600">Certified Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {new Set(certificates.map(cert => cert.issuer)).size}
              </div>
              <div className="text-sm text-slate-600">Issuing Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;