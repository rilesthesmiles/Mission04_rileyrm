using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_rileyrm.Models
{
    public class GradeCalculatorModel
    {

        // These are all the fields with the assignments for the grade calculator
        // they are all required and need to be in the range of 0 - 100
        [Required]
        [Range(0,100)]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int GroupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int Final { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
