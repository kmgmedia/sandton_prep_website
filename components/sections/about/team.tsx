import React from "react";

const team = [
  {
    name: "Esther Adebola",
    role: "Principal & Director",
    experience: "9+ years in early childhood education",
    qualification: "",
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1768085973/Sandton%20Preparatory%20School%20Web%20Images/About%20Session/1749856746160_gsnsex.jpg",
  },
  {
    name: "Michael Chen",
    role: "Head of Curriculum",
    experience: "5+ years in curriculum development",
    qualification: "",
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1768086518/Sandton%20Preparatory%20School%20Web%20Images/About%20Session/_D6A8934_mr_tunde_gfuyeuwwi_a3ytjr.png",
  },
  {
    name: "Emma Williams",
    role: "Lead Teacher - Toddlers",
    experience: "8+ years with toddler development",
    qualification: "Diploma in Early Childhood Education",
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1768085973/Sandton%20Preparatory%20School%20Web%20Images/About%20Session/1749856746160_gsnsex.jpg",
  },
  {
    name: "David Martinez",
    role: "Creative Arts Coordinator",
    experience: "10+ years in arts education",
    qualification: "BA Fine Arts, PGCE Creative Arts",
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1768085973/Sandton%20Preparatory%20School%20Web%20Images/About%20Session/1749856746160_gsnsex.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full bg-gray-100 rounded-3xl shadow-lg p-10 md:p-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Quicksand']">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg font-['Quicksand']">
          Experienced educators passionate about early childhood development
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              {/* Avatar */}
              <div className="bg-yellow-100 rounded-full p-6 mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                {member.name}
              </h4>
              <p className="text-yellow-600 font-semibold text-sm mb-2">
                {member.role}
              </p>

              {/* Details (always visible now) */}
              <div className="text-gray-600 text-xs sm:text-sm mt-2">
                <p className="mb-1">{member.experience}</p>
                <p className="text-gray-500">{member.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
